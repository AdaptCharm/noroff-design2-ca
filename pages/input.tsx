import { Page, Text, Input } from '@components/ui'
import { SparklesIcon } from '@heroicons/react/outline'

export default function _Input() {
  return (
    <Page title="Input">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Input</Text>
            <Text as="h2" size={18} weight={400}>
              Get text input from endpoint user.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Input placeholder="Placeholder" />
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-8">
            <Text as="h3">Sizes</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Input placeholder={size} size={size} capitalize />
                </div>
              ))}
            </div>
          </div>

          {/* Prefix */}
          <div className="space-y-8">
            <Text as="h3">Prefix</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Input
                    placeholder={size}
                    size={size}
                    prefix={<SparklesIcon />}
                    capitalize
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Suffix */}
          <div className="space-y-8">
            <Text as="h3">Suffix</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Input
                    placeholder={size}
                    size={size}
                    suffix={<SparklesIcon />}
                    capitalize
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prefix & Suffix */}
          <div className="space-y-8">
            <Text as="h3">Prefix &amp; Suffix</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Input
                    placeholder={size}
                    size={size}
                    prefix={<SparklesIcon />}
                    suffix={<SparklesIcon />}
                    capitalize
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Ghost prefix */}
          <div className="space-y-8">
            <Text as="h3">Ghost Prefix</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Input
                    placeholder={size}
                    size={size}
                    prefix={(idx === 0 || idx === 2) && <SparklesIcon />}
                    prefixStyling={false}
                    suffix={(idx === 1 || idx === 2) && <SparklesIcon />}
                    suffixStyling={false}
                    capitalize
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-8">
            <Text as="h3">Disabled</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['Disabled'].map((text, idx) => (
                <div className="flex items-center" key={idx}>
                  <Input
                    placeholder={text}
                    prefix={<SparklesIcon />}
                    disabled
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
