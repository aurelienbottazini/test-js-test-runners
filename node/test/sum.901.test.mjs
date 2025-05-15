
import sum901 from '../sum901.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 43 to equal 128 + offset 0.8554529993376926', (t) => {
  assert.strictEqual(sum901(85, 43), 128 + 0.8554529993376926);
});
