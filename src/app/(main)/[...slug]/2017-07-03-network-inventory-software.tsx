import { Link, Stack, Typo } from '@/components';

export const categories = ['website', 'software'];
export const tags = ['website', 'internet', 'software', 'time', 'network'];
export const title = 'Network Inventory Software - Network Asset Tracker Pro';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>Network Asset Tracker Pro</strong> generates a <strong>network inventory</strong> without installing
      software on the users&apos; PCs. It enables you to scan all the nodes of your network with just one click. Get
      complete information about operating systems, service packs, hotfixes, hardware, product keys and versions of
      installed software, running processes on remote PCs fast. Create reports about hardware, software and running
      processes on all computers on your local network.
    </Typo>
    <Stack alignItems="center">
      <Link href="https://www.misutilities.com/network-asset-tracker-pro/index.html" title="Hardware inventory">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          alt="Hardware inventory"
          src="https://www.misutilities.com/lo/img/NATPro_Hardware_Inventory_sm.jpg"
          width="600"
        />
      </Link>
    </Stack>
    <Typo variant="paragraph">
      Network Asset Tracker Pro offers many useful features to make network inventory easier and more powerful. Network
      administrators will like the features like Windows product key, MAC address, Manufacturer. Also, you can see
      versions and product keys of installed software on remote PCs.
    </Typo>
    <Typo variant="header2">Hardware Inventory</Typo>
    <Typo variant="paragraph">
      Using Network Asset Tracker Pro you will have up-to-date hardware information about each workstation on your
      network.
    </Typo>
    <Typo variant="list">
      <li>Processor type and frequency;</li>
      <li>BIOS information and serial number;</li>
      <li>Motherboard and chassis;</li>
      <li>Network adapters;</li>
      <li>Memory size and memory modules;</li>
      <li>Hard drive, CD/DVD drive</li>
      <li>Video card and monitor;</li>
      <li>Multimedia devices;</li>
      <li>Printers;</li>
      <li>Manufacturer;</li>
      <li>Serial number, etc</li>
    </Typo>
    <Typo variant="header2">Software Inventory</Typo>
    <Typo variant="paragraph">
      Network Asset Tracker Pro provides the information to assist in managing an enterprise&apos;s{' '}
      <strong>installed software</strong>, implementation and license compliancy program. Software &amp; OS-related
      information:
    </Typo>
    <Typo variant="list">
      <li>Operating system type, version, build, product key and product ID;</li>
      <li>Service packs and hotfixes;</li>
      <li>Shared resources;</li>
      <li>Startup programs;</li>
      <li>Product keys and versions of installed software;</li>
      <li>Running processes.</li>
    </Typo>
    <Typo variant="paragraph">
      Network Asset Tracker Pro is intended for corporate networks where quick analysis of software and hardware
      information of a remote machine may help system administrator solve any potential problem real fast. But it could
      be very effective as well for IT service providers or SOHO clients. The application is both flexible as to
      configuring and easy to install and use which makes analyzing remote computers operating status a snap while
      preserving great deal of control over remote systems. The overall productivity of network administrator work may
      increase, which is easily converted to less frustration, saved time and money.
    </Typo>
    <Typo variant="paragraph">
      Network Asset Tracker Pro works as standard windows application, it’s simple{' '}
      <Link href="https://www.misutilities.com/network-asset-tracker-pro/index.html" title="Network Inventory Software">
        network inventory software
      </Link>
      . There is no need to install any Web Servers or any other complicated systems.
    </Typo>
    <Typo variant="paragraph">
      The newest version of Network Asset Tracker Pro is available to download at:
      <Link href="https://www.misutilities.com" title="Network Inventory Software">
        www.misutilities.com
      </Link>
    </Typo>
  </>
);
