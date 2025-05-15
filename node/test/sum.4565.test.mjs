
import sum4565 from '../sum4565.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 56 to equal 125 + offset 0.8375344225868083', (t) => {
  assert.strictEqual(sum4565(69, 56), 125 + 0.8375344225868083);
});
