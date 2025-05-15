
import sum2245 from '../sum2245.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 97 to equal 123 + offset 0.5412555296906171', (t) => {
  assert.strictEqual(sum2245(26, 97), 123 + 0.5412555296906171);
});
