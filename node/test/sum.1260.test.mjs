
import sum1260 from '../sum1260.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 44 to equal 106 + offset 0.988670356676878', (t) => {
  assert.strictEqual(sum1260(62, 44), 106 + 0.988670356676878);
});
