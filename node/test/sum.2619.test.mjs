
import sum2619 from '../sum2619.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 12 to equal 54 + offset 0.1233216907423782', (t) => {
  assert.strictEqual(sum2619(42, 12), 54 + 0.1233216907423782);
});
