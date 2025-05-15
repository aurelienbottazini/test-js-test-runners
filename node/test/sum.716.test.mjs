
import sum716 from '../sum716.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 50 to equal 54 + offset 0.1737443956118594', (t) => {
  assert.strictEqual(sum716(4, 50), 54 + 0.1737443956118594);
});
