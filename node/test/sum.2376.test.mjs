
import sum2376 from '../sum2376.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 40 to equal 94 + offset 0.7210449401577111', (t) => {
  assert.strictEqual(sum2376(54, 40), 94 + 0.7210449401577111);
});
