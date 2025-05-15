
import sum2368 from '../sum2368.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 18 to equal 111 + offset 0.2158029039275865', (t) => {
  assert.strictEqual(sum2368(93, 18), 111 + 0.2158029039275865);
});
