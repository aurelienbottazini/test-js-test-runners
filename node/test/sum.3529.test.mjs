
import sum3529 from '../sum3529.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 58 to equal 67 + offset 0.21037467898771722', (t) => {
  assert.strictEqual(sum3529(9, 58), 67 + 0.21037467898771722);
});
