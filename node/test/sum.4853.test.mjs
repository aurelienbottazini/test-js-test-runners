
import sum4853 from '../sum4853.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 51 to equal 91 + offset 0.21053002462371473', (t) => {
  assert.strictEqual(sum4853(40, 51), 91 + 0.21053002462371473);
});
