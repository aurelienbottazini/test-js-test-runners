
import sum1743 from '../sum1743.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 99 to equal 106 + offset 0.21646450315534682', (t) => {
  assert.strictEqual(sum1743(7, 99), 106 + 0.21646450315534682);
});
