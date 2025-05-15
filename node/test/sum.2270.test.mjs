
import sum2270 from '../sum2270.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 87 to equal 153 + offset 0.42845441172582066', (t) => {
  assert.strictEqual(sum2270(66, 87), 153 + 0.42845441172582066);
});
