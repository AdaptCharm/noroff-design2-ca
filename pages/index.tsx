import { Page, Text, Card } from '@components/ui'
import { Logo } from '@components/icons'
import Image from 'next/image'

export default function Home() {
  return (
    <Page>
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Brand</Text>
            <Text as="h2" size={18} weight={400}>
              The name of the brand is <b>Sparkling Interior</b>.
            </Text>
          </div>

          <div className="space-y-8">
            <Text as="h3">Personality</Text>
            <Text>The brand personality is minimalistic, yet elegant.</Text>
          </div>

          <div className="space-y-8">
            <Text as="h3">Target Audience</Text>
            <Text>The target audience is all age groups.</Text>
          </div>

          {/* Logo */}
          <div className="space-y-8">
            <Text as="h3">Logo</Text>
            <div className="text-center sm:flex">
              <Card>
                <Logo />
              </Card>
            </div>
          </div>

          {/* Spacing considerations */}
          <div className="space-y-8">
            <Text as="h3">Spacing Considerations</Text>
            <Text>
              The logo must be able to breathe. If you are displaying the logo
              next to another item, please give it a height of 100%.
            </Text>
          </div>
        </div>
      </div>
    </Page>
  )
}
