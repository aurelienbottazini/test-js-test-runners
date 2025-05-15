
import sum3706 from '../sum3706.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 56 to equal 148 + offset 0.701322055445237', (t) => {
  assert.strictEqual(sum3706(92, 56), 148 + 0.701322055445237);
});
