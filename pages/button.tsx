import { Page, Button, Text } from '@components/ui'
import { SparklesIcon } from '@heroicons/react/outline'

export default function _Button() {
  return (
    <Page title="Button">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Button</Text>
            <Text as="h2" size={18} weight={400}>
              Used to submit forms or on-click behaviors.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Button>
                <Text as="span">Button</Text>
              </Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-8">
            <Text as="h3">Sizes</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Button size={size}>
                    <Text as="span" capitalize>
                      {size}
                    </Text>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Shapes */}
          <div className="space-y-8">
            <Text as="h3">Shapes</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Button size={size} shape="square">
                    <SparklesIcon />
                  </Button>
                </div>
              ))}
              {['small', 'medium', 'large'].reverse().map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Button size={size} shape="circle">
                    <SparklesIcon />
                  </Button>
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
                  <Button size={size}>
                    <SparklesIcon />
                    <Text as="span" capitalize>
                      {size}
                    </Text>
                  </Button>
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
                  <Button size={size}>
                    <Text as="span" capitalize>
                      {size}
                    </Text>
                    <SparklesIcon />
                  </Button>
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
                  <Button size={size}>
                    <SparklesIcon />
                    <Text as="span" capitalize>
                      {size}
                    </Text>
                    <SparklesIcon />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-8">
            <Text as="h3">Colors</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['primary', 'secondary', 'success', 'warning', 'error'].map(
                (color) => (
                  <Button color={color} key={color}>
                    <Text as="span" capitalize>
                      {color}
                    </Text>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Ghost */}
          <div className="space-y-8">
            <Text as="h3">Ghost</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['primary', 'secondary', 'success', 'warning', 'error'].map(
                (color) => (
                  <Button color={color} ghost key={color}>
                    <Text as="span" capitalize>
                      {color}
                    </Text>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Blend */}
          <div className="space-y-8">
            <Text as="h3">Blend</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['primary', 'secondary', 'success', 'warning', 'error'].map(
                (color) => (
                  <Button color={color} blend key={color}>
                    <Text as="span" capitalize>
                      {color}
                    </Text>
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
