
import sum3767 from '../sum3767.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 89 to equal 121 + offset 0.22404558183049827', (t) => {
  assert.strictEqual(sum3767(32, 89), 121 + 0.22404558183049827);
});
