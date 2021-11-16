import { Page, Text, Card, Tooltip, Link, Badge, Button } from '@components/ui'

export default function _Tooltip() {
  return (
    <Page title="Tooltip">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Tooltip</Text>
            <Text as="h2" size={18} weight={400}>
              Displays additional information on hover.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex gap-8 justify-center md:justify-start">
                <Tooltip text="Lorem ipsum dolar.">
                  <Text capitalize>Tooltip</Text>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Trigger by click */}
          <div className="space-y-8">
            <Text as="h3">Trigger by click</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex gap-8 justify-center md:justify-start">
                <Tooltip trigger="click" text="Lorem ipsum dolar.">
                  <Text capitalize>Tooltip</Text>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Placements */}
          <div className="space-y-8">
            <Text as="h3">Placements</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex gap-8 justify-center md:justify-start">
                {['top', 'right', 'bottom', 'left'].map((position, idx) => (
                  <Tooltip
                    placement={position}
                    text="Lorem ipsum dolar."
                    key={idx}
                  >
                    <Text capitalize>{position}</Text>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-8">
            <Text as="h3">Sizes</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex gap-8 justify-center md:justify-start">
                {['small', 'medium', 'large'].map((size, idx) => (
                  <Tooltip size={size} text="Lorem ipsum dolar." key={idx}>
                    <Text capitalize>{size}</Text>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-8">
            <Text as="h3">Colors</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex gap-8 justify-center md:justify-start">
                {['primary', 'secondary', 'success', 'warning', 'error'].map(
                  (color, idx) => (
                    <Tooltip color={color} text="Lorem ipsum dolar." key={idx}>
                      <Text capitalize>{color}</Text>
                    </Tooltip>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Shapes */}
          <div className="space-y-8">
            <Text as="h3">Shapes</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex gap-8 justify-center md:justify-start">
                {['circle', 'rounded', 'square'].map((shape, idx) => (
                  <Tooltip shape={shape} text="Lorem ipsum dolar." key={idx}>
                    <Text capitalize>{shape}</Text>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Non-Text */}
          <div className="space-y-8">
            <Text as="h3">Non-Text</Text>
            <Text>Ability to wrap any element.</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex flex-col gap-8">
                {['Button', 'Badge', 'Hyperlink', 'Card'].map((name, idx) => (
                  <div key={idx}>
                    <Tooltip text={name} placement="right">
                      {idx === 0 ? (
                        <Button>{name}</Button>
                      ) : idx === 1 ? (
                        <Badge>{name}</Badge>
                      ) : idx === 2 ? (
                        <Link href="#" variant="secondary">
                          {name}
                        </Link>
                      ) : (
                        <Card>{name}</Card>
                      )}
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
