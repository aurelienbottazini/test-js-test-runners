
import sum3358 from '../sum3358.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 16 to equal 83 + offset 0.1924569270476213', (t) => {
  assert.strictEqual(sum3358(67, 16), 83 + 0.1924569270476213);
});
