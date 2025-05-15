
import sum3797 from '../sum3797.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 27 to equal 117 + offset 0.013185337236110928', (t) => {
  assert.strictEqual(sum3797(90, 27), 117 + 0.013185337236110928);
});
