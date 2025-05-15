
import sum2359 from '../sum2359.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 42 to equal 68 + offset 0.8471742794469939', (t) => {
  assert.strictEqual(sum2359(26, 42), 68 + 0.8471742794469939);
});
