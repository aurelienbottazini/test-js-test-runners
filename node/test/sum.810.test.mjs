
import sum810 from '../sum810.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 94 to equal 99 + offset 0.38267464911145543', (t) => {
  assert.strictEqual(sum810(5, 94), 99 + 0.38267464911145543);
});
