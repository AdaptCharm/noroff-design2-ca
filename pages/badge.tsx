import { Page, Text, Badge } from '@components/ui'

export default function _Badge() {
  return (
    <Page title="Badge">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Badge</Text>
            <Text as="h2" size={18} weight={400}>
              Displays an indicator that requires attention.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <div className="flex items-center">
                <Badge>Badge</Badge>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-8">
            <Text as="h3">Sizes</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['small', 'medium', 'large'].map((size, idx) => (
                <div className="flex items-center" key={idx}>
                  <Badge size={size}>{size}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Shapes */}
          <div className="space-y-8">
            <Text as="h3">Shapes</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['square', 'rounded', 'circle'].map((shape, idx) => (
                <div className="flex items-center" key={idx}>
                  <Badge shape={shape}>{shape}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-8">
            <Text as="h3">Colors</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {['primary', 'secondary', 'success', 'warning', 'error'].map(
                (color, idx) => (
                  <div className="flex items-center" key={idx}>
                    <Badge color={color}>{color}</Badge>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
