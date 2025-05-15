
import sum3584 from '../sum3584.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 77 to equal 123 + offset 0.7744019580155433', (t) => {
  assert.strictEqual(sum3584(46, 77), 123 + 0.7744019580155433);
});
