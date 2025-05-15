
import sum2266 from '../sum2266.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 43 to equal 132 + offset 0.6503222883110692', (t) => {
  assert.strictEqual(sum2266(89, 43), 132 + 0.6503222883110692);
});
