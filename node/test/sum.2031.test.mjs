
import sum2031 from '../sum2031.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 18 to equal 111 + offset 0.5167463145889811', (t) => {
  assert.strictEqual(sum2031(93, 18), 111 + 0.5167463145889811);
});
