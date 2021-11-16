import { Page, Text } from '@components/ui'

export default function _Text() {
  return (
    <Page title="Text">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Text</Text>
            <Text as="h2" size={18} weight={400}>
              Display text using the <b>Inter</b> font family.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-md p-6">
              {['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'].map(
                (component, idx) => (
                  <Text as={component} color="primary" key={idx}>
                    Lorem dolar ipsum. ({component})
                  </Text>
                )
              )}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-8">
            <Text as="h3">Sizes</Text>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-md p-6">
              {[12, 14, 16, 18, 20, 24, 30, 36, 48].reverse().map((size) => (
                <Text size={size} color="primary" key={size}>
                  Lorem dolar ipsum. ({size} px)
                </Text>
              ))}
            </div>
          </div>

          {/* Weights */}
          <div className="space-y-8">
            <Text as="h3">Weights</Text>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-md p-6">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900]
                .reverse()
                .map((weight) => (
                  <Text size={16} weight={weight} color="primary" key={weight}>
                    Lorem dolar ipsum. ({weight})
                  </Text>
                ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-8">
            <Text as="h3">Colors</Text>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-md p-6">
              {['primary', 'gray', 'success', 'warning', 'error'].map(
                (color) => (
                  <Text size={16} color={color} key={color}>
                    Lorem dolar ipsum. ({color})
                  </Text>
                )
              )}
            </div>
          </div>

          {/* Truncate */}
          <div className="space-y-8">
            <Text as="h3">Truncate</Text>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-md p-6">
              <div style={{ maxWidth: 100 }}>
                <Text size={16} color="primary" truncate>
                  Lorem dolar ipsum.
                </Text>
              </div>
            </div>
          </div>

          {/* <Stack gap={1} debug>
          <div className="w-10 h-10 rounded bg-black" />
          <div className="w-10 h-10 rounded bg-black" />
          <div className="w-10 h-10 rounded bg-black" />
        </Stack> */}
        </div>
      </div>
    </Page>
  )
}
