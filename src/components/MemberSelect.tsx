'use client';

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

interface MemberSelectProps {
  members: any[];
  value: string;
  onChange: (email: string) => void;
  placeholder?: string;
  onSearch?: (query: string) => Promise<any[]>;
}

export default function MemberSelect({ members, value, onChange, placeholder = 'Select a member', onSearch }: MemberSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = members.find((m: any) => m.email === value);

  const displayMembers = onSearch ? results : members;

  const filtered = displayMembers.filter((m: any) => {
    const q = query.toLowerCase();
    return m.name?.toLowerCase().includes(q) || m.email?.toLowerCase().includes(q);
  });

  useEffect(() => {
    if (!onSearch || !query.trim()) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setSearching(true);
    const timer = setTimeout(async () => {
      try {
        const res = await onSearch(query);
        if (!cancelled) setResults(res);
      } catch {
        if (!cancelled) setResults([]);
      } finally {
        if (!cancelled) setSearching(false);
      }
    }, 300);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [query, onSearch]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-black border border-yellow-500/40 text-left p-2 rounded-lg flex items-center justify-between"
      >
        <span className={selected ? 'text-yellow-400' : 'text-yellow-400/50'}>
          {selected ? `${selected.name} (${selected.email})` : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-yellow-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-zinc-950 border border-yellow-400/30 rounded-lg shadow-lg max-h-60 overflow-hidden flex flex-col">
          <div className="p-2 border-b border-yellow-400/20">
            <div className="flex items-center gap-2 bg-black rounded-md px-2">
              <Search className="w-3.5 h-3.5 text-yellow-400/60 shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search by name or email..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-yellow-400 text-sm py-1.5 w-full focus:outline-none placeholder:text-yellow-400/40"
              />
            </div>
          </div>
          <div className="overflow-y-auto">
            {searching ? (
              <div className="p-3 text-sm text-yellow-400/50 text-center">Searching...</div>
            ) : filtered.length === 0 ? (
              <div className="p-3 text-sm text-yellow-400/50 text-center">No members found</div>
            ) : (
              filtered.map((member: any) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => { onChange(member.email); setOpen(false); setQuery(''); }}
                  className={`w-full text-left px-3 py-2 text-sm flex items-center gap-3 hover:bg-yellow-400/10 transition-colors ${member.email === value ? 'bg-yellow-400/15 text-yellow-300' : 'text-yellow-400'}`}
                >
                  <Image
                    src={member.profileAvatar || '/default-avatar.png'}
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                  <span className="truncate">{member.name} <span className="text-yellow-400/60">({member.email})</span></span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
