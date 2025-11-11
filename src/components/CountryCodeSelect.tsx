import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const countryCodes = [
  { code: "+1", label: "🇺🇸 +1 (US/Canada)", search: "us canada united states" },
  { code: "+7", label: "🇷🇺 +7 (Russia)", search: "russia" },
  { code: "+20", label: "🇪🇬 +20 (Egypt)", search: "egypt" },
  { code: "+27", label: "🇿🇦 +27 (South Africa)", search: "south africa" },
  { code: "+30", label: "🇬🇷 +30 (Greece)", search: "greece" },
  { code: "+31", label: "🇳🇱 +31 (Netherlands)", search: "netherlands" },
  { code: "+32", label: "🇧🇪 +32 (Belgium)", search: "belgium" },
  { code: "+33", label: "🇫🇷 +33 (France)", search: "france" },
  { code: "+34", label: "🇪🇸 +34 (Spain)", search: "spain" },
  { code: "+39", label: "🇮🇹 +39 (Italy)", search: "italy" },
  { code: "+40", label: "🇷🇴 +40 (Romania)", search: "romania" },
  { code: "+41", label: "🇨🇭 +41 (Switzerland)", search: "switzerland" },
  { code: "+43", label: "🇦🇹 +43 (Austria)", search: "austria" },
  { code: "+44", label: "🇬🇧 +44 (UK)", search: "uk united kingdom britain" },
  { code: "+45", label: "🇩🇰 +45 (Denmark)", search: "denmark" },
  { code: "+46", label: "🇸🇪 +46 (Sweden)", search: "sweden" },
  { code: "+47", label: "🇳🇴 +47 (Norway)", search: "norway" },
  { code: "+48", label: "🇵🇱 +48 (Poland)", search: "poland" },
  { code: "+49", label: "🇩🇪 +49 (Germany)", search: "germany" },
  { code: "+51", label: "🇵🇪 +51 (Peru)", search: "peru" },
  { code: "+52", label: "🇲🇽 +52 (Mexico)", search: "mexico" },
  { code: "+53", label: "🇨🇺 +53 (Cuba)", search: "cuba" },
  { code: "+54", label: "🇦🇷 +54 (Argentina)", search: "argentina" },
  { code: "+55", label: "🇧🇷 +55 (Brazil)", search: "brazil" },
  { code: "+56", label: "🇨🇱 +56 (Chile)", search: "chile" },
  { code: "+57", label: "🇨🇴 +57 (Colombia)", search: "colombia" },
  { code: "+58", label: "🇻🇪 +58 (Venezuela)", search: "venezuela" },
  { code: "+60", label: "🇲🇾 +60 (Malaysia)", search: "malaysia" },
  { code: "+61", label: "🇦🇺 +61 (Australia)", search: "australia" },
  { code: "+62", label: "🇮🇩 +62 (Indonesia)", search: "indonesia" },
  { code: "+63", label: "🇵🇭 +63 (Philippines)", search: "philippines" },
  { code: "+64", label: "🇳🇿 +64 (New Zealand)", search: "new zealand" },
  { code: "+65", label: "🇸🇬 +65 (Singapore)", search: "singapore" },
  { code: "+66", label: "🇹🇭 +66 (Thailand)", search: "thailand" },
  { code: "+81", label: "🇯🇵 +81 (Japan)", search: "japan" },
  { code: "+82", label: "🇰🇷 +82 (South Korea)", search: "south korea korea" },
  { code: "+84", label: "🇻🇳 +84 (Vietnam)", search: "vietnam" },
  { code: "+86", label: "🇨🇳 +86 (China)", search: "china" },
  { code: "+90", label: "🇹🇷 +90 (Turkey)", search: "turkey" },
  { code: "+91", label: "🇮🇳 +91 (India)", search: "india" },
  { code: "+92", label: "🇵🇰 +92 (Pakistan)", search: "pakistan" },
  { code: "+93", label: "🇦🇫 +93 (Afghanistan)", search: "afghanistan" },
  { code: "+94", label: "🇱🇰 +94 (Sri Lanka)", search: "sri lanka" },
  { code: "+95", label: "🇲🇲 +95 (Myanmar)", search: "myanmar burma" },
  { code: "+98", label: "🇮🇷 +98 (Iran)", search: "iran" },
  { code: "+212", label: "🇲🇦 +212 (Morocco)", search: "morocco" },
  { code: "+213", label: "🇩🇿 +213 (Algeria)", search: "algeria" },
  { code: "+216", label: "🇹🇳 +216 (Tunisia)", search: "tunisia" },
  { code: "+234", label: "🇳🇬 +234 (Nigeria)", search: "nigeria" },
  { code: "+254", label: "🇰🇪 +254 (Kenya)", search: "kenya" },
  { code: "+351", label: "🇵🇹 +351 (Portugal)", search: "portugal" },
  { code: "+352", label: "🇱🇺 +352 (Luxembourg)", search: "luxembourg" },
  { code: "+353", label: "🇮🇪 +353 (Ireland)", search: "ireland" },
  { code: "+354", label: "🇮🇸 +354 (Iceland)", search: "iceland" },
  { code: "+355", label: "🇦🇱 +355 (Albania)", search: "albania" },
  { code: "+356", label: "🇲🇹 +356 (Malta)", search: "malta" },
  { code: "+357", label: "🇨🇾 +357 (Cyprus)", search: "cyprus" },
  { code: "+358", label: "🇫🇮 +358 (Finland)", search: "finland" },
  { code: "+380", label: "🇺🇦 +380 (Ukraine)", search: "ukraine" },
  { code: "+381", label: "🇷🇸 +381 (Serbia)", search: "serbia" },
  { code: "+420", label: "🇨🇿 +420 (Czech Republic)", search: "czech republic czechia" },
  { code: "+852", label: "🇭🇰 +852 (Hong Kong)", search: "hong kong" },
  { code: "+853", label: "🇲🇴 +853 (Macau)", search: "macau" },
  { code: "+880", label: "🇧🇩 +880 (Bangladesh)", search: "bangladesh" },
  { code: "+886", label: "🇹🇼 +886 (Taiwan)", search: "taiwan" },
  { code: "+960", label: "🇲🇻 +960 (Maldives)", search: "maldives" },
  { code: "+961", label: "🇱🇧 +961 (Lebanon)", search: "lebanon" },
  { code: "+962", label: "🇯🇴 +962 (Jordan)", search: "jordan" },
  { code: "+963", label: "🇸🇾 +963 (Syria)", search: "syria" },
  { code: "+964", label: "🇮🇶 +964 (Iraq)", search: "iraq" },
  { code: "+965", label: "🇰🇼 +965 (Kuwait)", search: "kuwait" },
  { code: "+966", label: "🇸🇦 +966 (Saudi Arabia)", search: "saudi arabia" },
  { code: "+967", label: "🇾🇪 +967 (Yemen)", search: "yemen" },
  { code: "+968", label: "🇴🇲 +968 (Oman)", search: "oman" },
  { code: "+971", label: "🇦🇪 +971 (UAE)", search: "uae emirates dubai" },
  { code: "+972", label: "🇮🇱 +972 (Israel)", search: "israel" },
  { code: "+973", label: "🇧🇭 +973 (Bahrain)", search: "bahrain" },
  { code: "+974", label: "🇶🇦 +974 (Qatar)", search: "qatar" },
  { code: "+977", label: "🇳🇵 +977 (Nepal)", search: "nepal" },
];

interface CountryCodeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function CountryCodeSelect({ value, onValueChange }: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);

  const selectedCountry = countryCodes.find((country) => country.code === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between"
        >
          {selectedCountry ? selectedCountry.label.split(" ")[0] + " " + selectedCountry.code : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countryCodes.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.code + " " + country.search}
                  onSelect={() => {
                    onValueChange(country.code);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
