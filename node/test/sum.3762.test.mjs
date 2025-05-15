
import sum3762 from '../sum3762.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 86 to equal 181 + offset 0.2959390143660551', (t) => {
  assert.strictEqual(sum3762(95, 86), 181 + 0.2959390143660551);
});
