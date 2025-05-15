
import sum344 from '../sum344.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 3 to equal 91 + offset 0.5366212592015802', (t) => {
  assert.strictEqual(sum344(88, 3), 91 + 0.5366212592015802);
});
