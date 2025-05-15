
import sum2771 from '../sum2771.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 65 to equal 159 + offset 0.045074620332167026', (t) => {
  assert.strictEqual(sum2771(94, 65), 159 + 0.045074620332167026);
});
