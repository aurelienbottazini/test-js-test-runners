
import sum289 from '../sum289.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 73 to equal 129 + offset 0.40370908996080557', (t) => {
  assert.strictEqual(sum289(56, 73), 129 + 0.40370908996080557);
});
