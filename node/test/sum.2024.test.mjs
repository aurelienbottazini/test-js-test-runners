
import sum2024 from '../sum2024.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 31 to equal 77 + offset 0.5977522956414826', (t) => {
  assert.strictEqual(sum2024(46, 31), 77 + 0.5977522956414826);
});
