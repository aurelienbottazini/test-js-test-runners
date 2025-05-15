
import sum286 from '../sum286.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 92 to equal 98 + offset 0.45884484450451357', (t) => {
  assert.strictEqual(sum286(6, 92), 98 + 0.45884484450451357);
});
