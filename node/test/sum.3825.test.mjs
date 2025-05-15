
import sum3825 from '../sum3825.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 65 to equal 93 + offset 0.21886072643755705', (t) => {
  assert.strictEqual(sum3825(28, 65), 93 + 0.21886072643755705);
});
