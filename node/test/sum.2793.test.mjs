
import sum2793 from '../sum2793.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 59 to equal 62 + offset 0.240681961520828', (t) => {
  assert.strictEqual(sum2793(3, 59), 62 + 0.240681961520828);
});
