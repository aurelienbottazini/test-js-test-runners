
import sum4465 from '../sum4465.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 28 to equal 76 + offset 0.6132233953616704', (t) => {
  assert.strictEqual(sum4465(48, 28), 76 + 0.6132233953616704);
});
