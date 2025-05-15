
import sum1265 from '../sum1265.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 98 to equal 100 + offset 0.35169311207477705', (t) => {
  assert.strictEqual(sum1265(2, 98), 100 + 0.35169311207477705);
});
