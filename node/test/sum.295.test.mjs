
import sum295 from '../sum295.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 67 to equal 129 + offset 0.9570320578854876', (t) => {
  assert.strictEqual(sum295(62, 67), 129 + 0.9570320578854876);
});
