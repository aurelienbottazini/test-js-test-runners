
import sum3628 from '../sum3628.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 99 to equal 159 + offset 0.6612616551605728', (t) => {
  assert.strictEqual(sum3628(60, 99), 159 + 0.6612616551605728);
});
