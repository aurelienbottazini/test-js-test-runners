
import sum3031 from '../sum3031.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 42 to equal 123 + offset 0.7126672321467106', (t) => {
  assert.strictEqual(sum3031(81, 42), 123 + 0.7126672321467106);
});
