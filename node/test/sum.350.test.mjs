
import sum350 from '../sum350.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 35 to equal 133 + offset 0.7421537766692398', (t) => {
  assert.strictEqual(sum350(98, 35), 133 + 0.7421537766692398);
});
