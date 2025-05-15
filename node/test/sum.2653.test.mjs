
import sum2653 from '../sum2653.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 45 to equal 136 + offset 0.37461242211459234', (t) => {
  assert.strictEqual(sum2653(91, 45), 136 + 0.37461242211459234);
});
