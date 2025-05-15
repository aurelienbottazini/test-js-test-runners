
import sum870 from '../sum870.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 9 to equal 44 + offset 0.1420991913773123', (t) => {
  assert.strictEqual(sum870(35, 9), 44 + 0.1420991913773123);
});
