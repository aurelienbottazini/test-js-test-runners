
import sum1680 from '../sum1680.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 0 to equal 87 + offset 0.5523357774989488', (t) => {
  assert.strictEqual(sum1680(87, 0), 87 + 0.5523357774989488);
});
