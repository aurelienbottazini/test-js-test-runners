
import sum1525 from '../sum1525.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 57 to equal 151 + offset 0.3188778387477048', (t) => {
  assert.strictEqual(sum1525(94, 57), 151 + 0.3188778387477048);
});
