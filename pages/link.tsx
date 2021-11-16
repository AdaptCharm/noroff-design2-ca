import { Page, Text, Link, Button, Card } from '@components/ui'

export default function _Link() {
  return (
    <Page title="Link">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Link</Text>
            <Text as="h2" size={18} weight={400}>
              Used to construct a hyperlink.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Link href="#">No styling by default</Link>
            </div>
          </div>

          {/* Non-Text */}
          <div className="space-y-8">
            <Text as="h3">Non-Text</Text>
            <Text>Ability to wrap any element, even cards and buttons.</Text>
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-8 md:flex-row">
                  {['large'].map((size, idx) => (
                    <Link href="#" key={idx}>
                      <Button size={size}>
                        <Text as="span">This button is a link.</Text>
                      </Button>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center">
                  <Link href="#">
                    <Card>This card is a link.</Card>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Primary */}
          <div className="space-y-8">
            <Text as="h3">Primary</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Link href="#" variant="primary">
                Primary
              </Link>
            </div>
          </div>

          {/* Secondary */}
          <div className="space-y-8">
            <Text as="h3">Secondary</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Link href="#" variant="secondary">
                Secondary
              </Link>
            </div>
          </div>

          {/* Blend */}
          <div className="space-y-8">
            <Text as="h3">Blend</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              {[
                'text-black',
                'text-green-600',
                'text-yellow-600',
                'text-red-600',
              ].map((color, idx) => (
                <Card className={color} key={idx}>
                  <Text as="span">
                    <Link href="#" variant="blend">
                      Blend
                    </Link>{' '}
                    inherits the parent color.
                  </Text>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
