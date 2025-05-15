
import sum4105 from '../sum4105.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 86 to equal 172 + offset 0.9804806690621635', (t) => {
  assert.strictEqual(sum4105(86, 86), 172 + 0.9804806690621635);
});
