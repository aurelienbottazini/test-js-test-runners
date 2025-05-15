
import sum2014 from '../sum2014.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 13 to equal 46 + offset 0.38650716374818794', (t) => {
  assert.strictEqual(sum2014(33, 13), 46 + 0.38650716374818794);
});
