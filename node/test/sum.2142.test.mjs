
import sum2142 from '../sum2142.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 76 to equal 144 + offset 0.8167463228969155', (t) => {
  assert.strictEqual(sum2142(68, 76), 144 + 0.8167463228969155);
});
