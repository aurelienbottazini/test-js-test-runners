
import sum4393 from '../sum4393.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 2 to equal 99 + offset 0.7581770707682739', (t) => {
  assert.strictEqual(sum4393(97, 2), 99 + 0.7581770707682739);
});
